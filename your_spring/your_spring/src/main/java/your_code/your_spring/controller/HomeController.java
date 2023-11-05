package your_code.your_spring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import your_code.your_spring.entity.MemberEntity;
import your_code.your_spring.entity.MemberEntity2;
import your_code.your_spring.service.MemberService;
import your_code.your_spring.service.MemberService2;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class HomeController {

    private final MemberService memberService;
    private final MemberService2 memberService2;

    @GetMapping("/analysis/result")
    public Map<String, List<?>> getResults(){
        Map<String, List<?>> results = new HashMap<>();
        results.put("list_1", memberService.getId());
        results.put("list_2", memberService2.getId());
        return results;
    }
}