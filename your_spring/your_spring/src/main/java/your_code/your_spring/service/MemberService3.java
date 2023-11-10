package your_code.your_spring.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import your_code.your_spring.entity.MemberEntity3;
import your_code.your_spring.repository.MemberRepository3;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberService3 {
    private final MemberRepository3 memberRepository3;
    public List<MemberEntity3> getId() {
        return memberRepository3.findAll();
    }
}