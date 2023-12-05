import requests
import re
import os, sys
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import Counter

#Spider Scan방식
def spiderScan(target_url):
    try:
        response = requests.get(target_url, timeout=5)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        #status_code = response.status_code if 'response' in locals() else None
        #print(f"Non-responsive URL: {target_url}, Status Code: {status_code}")
        return
    except ValueError:
        #print(f"Invalid URL: {target_url}")
        return

    visited.add(target_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    if target_url.startswith(base_url):
        for tag in soup.find_all(['script', 'a', 'form', 'link', 'img', 'area', 'meta', 'embed', 'object']):
            
            if tag.name == 'script':
                if tag.string:
                    match_location = re.search(r'(window\s*\.\s*)?location\s*(\.\s*href|\.\s*replace)\s*(=\s*[\'"](.*?)[\'"]|\([\'"](.*?)[\'"]\))', tag.string, re.IGNORECASE)
                    if match_location and (match_location.group(4) or match_location.group(5)):
                        full_url = urljoin(target_url, match_location.group(4) or match_location.group(5))
                        print(f"script_location: {full_url}", file=sys.stdout)
                        if not full_url.startswith('#') and full_url not in visited:
                            spiderScan(full_url)

                match_src = tag.get('src')
                if match_src and not 'ionicons' in match_src:
                    full_url = urljoin(target_url, match_src)
                    path_with_extension = urlparse(full_url).path
                    print(f"script_src: {full_url}", file=sys.stdout)

                    if path_with_extension not in refer_dict:
                        refer_dict[path_with_extension] = [(full_url, response.status_code)]
                    else:
                        refer_dict[path_with_extension].append((full_url, response.status_code))

            elif tag.name == 'a':
                href_value = tag.get('href')
                if href_value and not href_value.startswith('#'):
                    full_url = urljoin(target_url, href_value)
                    print(f"a_href: {full_url}", file=sys.stdout)
                    path_with_extension = urlparse(full_url).path
                    refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))
                    parsed_url = urlparse(full_url)

                    if re.match(r'^[\w,\s-]+\.[A-Za-z0-9]+$', os.path.basename(path_with_extension)):
                        refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))

                    if parsed_url.scheme in ['http', 'https']:
                        if full_url not in visited:
                            spiderScan(full_url)

            elif tag.name == 'form':
                action_value = tag.get('action')
                if action_value and not action_value.startswith('#'):
                    full_url = urljoin(target_url, action_value)
                    print(f"form_action: {full_url}", file=sys.stdout)
                    path_with_extension = urlparse(full_url).path
                    refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))

            elif tag.name == 'link':
                href_value = tag.get('href')
                if href_value and not href_value.startswith('#'):
                    full_url = urljoin(target_url, href_value)
                    print(f"link_href: {full_url}", file=sys.stdout)
                    path_with_extension = urlparse(full_url).path
                    refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))

            elif tag.name == 'img':
                src_value = tag.get('src')
                if src_value and not src_value.startswith('#'):
                    full_url = urljoin(target_url, src_value)
                    print(f"img_src: {full_url}", file=sys.stdout)
                    path_with_extension = urlparse(full_url).path
                    refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))

            elif tag.name == 'area':
                href_value = tag.get('href')
                if href_value and not href_value.startswith('#'):
                    full_url = urljoin(target_url, href_value)
                    print(f"area_href: {full_url}", file=sys.stdout)
                    path_with_extension = urlparse(full_url).path
                    refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))

            elif tag.name == 'meta':
                http_equiv_value = tag.get('http-equiv')
                content_value = tag.get('content')
                if http_equiv_value and http_equiv_value.lower() == "refresh" and content_value:
                    match_meta_refresh = re.search(r'url\s*=\s*(.*)$', content_value.strip(), re.IGNORECASE)
                    if match_meta_refresh:
                        full_url = urljoin(target_url, match_meta_refresh.group(1))
                        print(f"meta: {full_url}", file=sys.stdout)
                        path_with_extension = urlparse(full_url).path
                        refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))

            elif tag.name in ['embed', 'object']:
                data_or_src_attr_val = tag.get('data') or tag.get('src')
                if data_or_src_attr_val and not data_or_src_attr_val.startswith('#'):
                    full_url = urljoin(target_url,data_or_src_attr_val)
                    print(f"embed&object: {full_url}", file=sys.stdout)
                    path_with_extension = urlparse(full_url).path
                    refer_dict.setdefault(path_with_extension, []).append((full_url, response.status_code))


#Dictionary Scan방식
# def dictionaryScan(target_url, parsed_url, max_ss_extension):
#     dictionary_file = "./Inter_YourCode-X/Scan/directory-list-2.3-medium.txt"
#     if not os.path.exists(dictionary_file):
#         print(f"Error: {dictionary_file} not found.")
#         return
#     else:
#         print(f"Success: {dictionary_file}")

#     with open(dictionary_file, 'r') as f:
#         directories = [line.strip() for line in f.readlines()]

#     base_url = parsed_url.scheme + "://" + parsed_url.netloc + parsed_url.path
#     if not parsed_url.path.endswith('/'):
#         base_url += '/'

#     session = requests.Session()

#     cnt = 0
#     for directory in directories:
#         file = directory + max_ss_extension
#         target_file = base_url + file
#         try:
#             response = session.head(target_file)
#             if response.status_code == 200:
#                 print(f"FILE: /{file}", file=sys.stdout)
#         except requests.exceptions.RequestException as e:
#             print(f"Error: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Error code: URL[1] 인자 전달받지 못함")
        sys.exit(1)
    url = sys.argv[1]

    parsed_url = urlparse(url)
    base_url = parsed_url.scheme + "://" + parsed_url.netloc

    visited = set()
    refer_dict = {}

    spiderScan(url)

    directory_names = set()
    for path_with_extension, _ in refer_dict.items():
        path_parts = path_with_extension.split('/')
        if len(path_parts) > 1:
            directory_name = '/'.join(path_parts[:-1]) + '/'
            if not any(char in r":*\"<>" for char in directory_name):
                directory_names.add(directory_name)
    for dirname in directory_names:
        print(f"DIR: {dirname}", file=sys.stdout)

    web_extensions = {'.html', '.htm', '.php', '.jsp', '.asp', '.aspx',
                    '.css', '.js', '.jsx', '.vue', '.ts', '.tsx', '.scess',
                    '.less', '.png', '.jpg', '.jpeg', '.svg'}
    re_path = []
    for path_with_extension, references in refer_dict.items():
        _, ext = os.path.splitext(path_with_extension)
        if ext in web_extensions:
            re_path.append(path_with_extension)
            print(f"FILE: {path_with_extension}", file=sys.stdout)
            unique_references = set()

    # extensions = [os.path.splitext(path)[1] for path in re_path]

    # server_script_extensions = ['.php', '.jsp', '.asp', '.aspx', '.c', '.ssjs', '.py', '.rb', '.js']
    # server_script_counts = {ext: extensions.count(ext) for ext in server_script_extensions}
    # max_ss_extension = max(server_script_counts, key=server_script_counts.get)
    # max_ss_count = server_script_counts[max_ss_extension]   

    # dictionaryScan(url, parsed_url, max_ss_extension) 