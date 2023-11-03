package your_code.your_spring.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
//import your_code.your_spring.dto.MemberDTO;

@Entity
@Getter
@Setter
@Table(name = "list_1")  //대문자 인식안됨!!!!!!!!!대문자하려면 의존성 추가해야됨

public class MemberEntity {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    private Long id;

    @Column(length = 500)
    private String url;

    @Column(length = 3000)
    private String payload_1;

    @Column(length = 30)
    private String category_1;

    private Integer num_1;

    @Column(length = 15)
    private String risk_1;

    @Column(length = 500)
    private String targeturl_1;

    @Column(length = 500)
    private String inspectionurl_1;

    @Column(length = 300)
    private String detailpayload_1;


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