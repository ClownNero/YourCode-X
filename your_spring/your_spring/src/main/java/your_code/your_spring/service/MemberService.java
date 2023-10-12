package your_code.your_spring.service;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
//import your_code.your_spring.dto.MemberDTO;
import your_code.your_spring.entity.MemberEntity;
import your_code.your_spring.repository.MemberRepository;

import java.util.ArrayList;
import java.util.List;

@Service
//@RequiredArgsConstructor
@AllArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public List<MemberEntity> getId() {
//        List<MemberEntity> memberEntityList = memberRepository.findAll();
//        List<MemberDTO> memberDTOList = new ArrayList<>();
//            // 하나씩 넣는 과정
//        for (MemberEntity memberEntity: memberEntityList) {
//            memberDTOList.add(MemberDTO.toMemberDTO(memberEntity));
//        }
//        return memberDTOList;
        return memberRepository.findAll();
    }
}



