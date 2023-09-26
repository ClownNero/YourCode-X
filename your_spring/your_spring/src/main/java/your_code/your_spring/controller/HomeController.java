package your_code.your_spring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
//import your_code.your_spring.dto.MemberDTO;
import your_code.your_spring.entity.MemberEntity;
import your_code.your_spring.repository.MemberRepository;
import your_code.your_spring.service.MemberService;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class HomeController {

    private final MemberService memberService;

    @GetMapping("/analysis/result")
//    public String hello() {
//        return "안녕하세요. 현재 서버시간은 "+ new Date() +"입니다. \n";
//    @ResponseBody  //json형식으로 보냄
//    public List<MemberDTO> findAll () {
//        List<MemberDTO> memberDTOList;
//        memberDTOList = memberService.findAll();
//        return memberDTOList;
//    }
    public List<MemberEntity> getId(){
        return memberService.getId();
    }
}





//    @GetMapping("/member/")
//    public String findAll(Model model){
//        List<MemberDTO> memberDTOList = memberService.findAll();
//        //어떠한 html로 가자갈 데이터가 있다면 model 사용
//        model.addAttribute("memberList",memberDTOList);
//        return "list";
//    }
//}
