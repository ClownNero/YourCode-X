package your_code.your_spring.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "list_1")

public class MemberEntity {
<<<<<<< HEAD

=======
>>>>>>> e213a9d233562055e7b76c39443ae10f1a0039b8
    @Id
    @Column(length = 500)
    private String url;

    @Column(length = 10000)
    private String payload;

    @Column(length = 30)
    private String category;

    private Integer num;

    @Column(length = 15)
    private String risk;

    @Column(length = 500)
    private String targeturl;

    @Column(length = 3000)
    private String inspectionurl;

    @Column(length = 300)
<<<<<<< HEAD
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
=======
    private String detailpayload;
}
>>>>>>> e213a9d233562055e7b76c39443ae10f1a0039b8
