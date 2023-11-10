package your_code.your_spring.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import your_code.your_spring.entity.MemberEntity;
import your_code.your_spring.repository.MemberRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public List<MemberEntity> getId() {
        return memberRepository.findAll();
    }
}



