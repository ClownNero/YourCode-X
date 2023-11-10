<<<<<<< HEAD
package your_code.your_spring.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import your_code.your_spring.entity.MemberEntity2;
import your_code.your_spring.repository.MemberRepository2;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberService2 {
    private final MemberRepository2 memberRepository2;
    public List<MemberEntity2> getId() {
        return memberRepository2.findAll();
    }
}
=======
package your_code.your_spring.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import your_code.your_spring.entity.MemberEntity2;
import your_code.your_spring.repository.MemberRepository2;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberService2 {
    private final MemberRepository2 memberRepository2;
    public List<MemberEntity2> getId() {
        return memberRepository2.findAll();
    }
}
>>>>>>> e213a9d233562055e7b76c39443ae10f1a0039b8
