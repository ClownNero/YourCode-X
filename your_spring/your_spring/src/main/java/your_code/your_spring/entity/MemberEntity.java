package your_code.your_spring.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
//import your_code.your_spring.dto.MemberDTO;

@Entity
@Getter
@Setter
@Table(name = "list")  //대문자 인식안됨!!!!!!!!!대문자하려면 의존성 추가해야됨

public class MemberEntity {


    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    private Long id;
//
//    @Column
    private String category;
//
//    @Column(unique = true)
    private Integer num;
//
//    @Column
    private String risk;


//    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
//        MemberEntity memberEntity = new MemberEntity();
//        memberEntity.setCategory(memberDTO.getCategory());
//        memberEntity.setRisk(memberDTO.getRisk());
//        memberEntity.setPayload(memberDTO.getPayload());
//        return memberEntity;
//    }
//    public MemberEntity(String category, Long risk, String payload){
//        this.category = category;
//        this.risk = risk;
//        this.payload = payload;
//}
}
