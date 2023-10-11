```mermaid
---
title: YourCode Internal Code
---
flowchart TD

    style A fill:#000000, stroke:#87CEEB, stroke-width:2px;
    style X fill:#000000, stroke:#87CEEB, stroke-width:2px;

    style SQLI fill:#000000, stroke:red, stroke-width:2px;
    style XSS fill:#000000, stroke:#ff0000, stroke-width:2px;
    style DIRINDEX fill:#000000, stroke:#ff0000, stroke-width:2px;
    style FILEUP fill:#000000, stroke:#ff0000, stroke-width:2px;
    style FILEDOWN fill:#000000, stroke:#ff0000, stroke-width:2px;

    subgraph INIT[== Enter URL ==]
        A[YourCode-X] --url--> X[Vulnerability Check]
    end
       
    X --Target url--> SQLI[SQL Injection]
    X --Target url--> XSS[XSS]
    X --Target url--> DIRINDEX[Directory Indexing]
    X --Target url--> FILEUP[File Upload]
    X --Target url--> FILEDOWN[File Download]

    subgraph CHECK1[SQLI]
        SQLI[SQL Injection] -- case1 --> S1[Classic SQLI]
        S1[Classic SQLI] -- return --> SQLI[SQL Injection]
        
        SQLI[SQL Injection] -- case2 --> S2[Error based SQLI]
        S2[Error based SQLI] -- return --> SQLI[SQL Injection]

        SQLI[SQL Injection] -- case3 --> s3[Union SQLI]
        s3[Union SQLI] -- return --> SQLI[SQL Injection]

        SQLI[SQL Injection] -- case4 --> s4[Blind SQLI]
        s4[Blind SQLI] -- return --> SQLI[SQL Injection]

        SQLI[SQL Injection] -- case5 --> s5[Out-of-band SQLI]
        s5[Out-of-band SQLI] -- return --> SQLI[SQL Injection]

        SQLI[SQL Injection] -- case6 --> s6[Second-Order SQLI]
        s6[Second-Order SQLI] -- return --> SQLI[SQL Injection]
    end
    SQLI[SQL Injection] -- return --> X