package your_code.your_spring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import your_code.your_spring.entity.MemberEntity;
import your_code.your_spring.entity.MemberEntity2;
import your_code.your_spring.entity.MemberEntity3;
import your_code.your_spring.service.MemberService;
import your_code.your_spring.service.MemberService2;
import your_code.your_spring.service.MemberService3;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class HomeController {

    private final MemberService memberService;
    private final MemberService2 memberService2;
    private final MemberService3 memberService3;

//        return results;
//    }

    @GetMapping("/analysis/result")
    public Map<String, List<?>> getResults(){
        Map<String, List<?>> results = new HashMap<>();
        List<?> list1 = memberService.getId();
        List<?> list2 = memberService2.getId();
        List<?> list3 = memberService3.getId();

        if(!list1.isEmpty()){
            results.put("list_1", list1);
        }
        if(!list2.isEmpty()){
            results.put("list_2", list2);
        }
        if(!list3.isEmpty()){
            results.put("list_3", list3);
        }

        return results;
    }


}
