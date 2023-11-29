package your_code.your_spring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import your_code.your_spring.entity.MemberEntity;
import your_code.your_spring.service.CVEService;
import your_code.your_spring.service.MemberService;
import your_code.your_spring.service.MemberService2;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class HomeController {
    private final CVEService cveService;
    private final MemberService memberService;
    private final MemberService2 memberService2;
    //    @GetMapping("/analysis/result")
//        public List<MemberEntity> getlistById() {
//            return memberService.getlistById();
//
//    }
    @GetMapping("/analysis/result")
    public Map<String, List<?>> getResults(){
        Map<String, List<?>> results = new HashMap<>();
        List<?> cve = cveService.getId();
        List<?> list = memberService.getId();
        List<?> checking = memberService2.getId();

        results.put("cve", cve);
        if(!list.isEmpty()){
            results.put("list", list);
        }
        if(!checking.isEmpty()){
            results.put("checking", checking);
        }


        return results;
    }


}