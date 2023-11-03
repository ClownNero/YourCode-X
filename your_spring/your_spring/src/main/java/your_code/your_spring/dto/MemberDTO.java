//package your_code.your_spring.dto;
//
//import lombok.*;
//import your_code.your_spring.entity.MemberEntity;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
//
//public class MemberDTO {
//    private Long id;
//    private String category;
//    private Long risk;
//    private String payload;
//
//    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
//        MemberDTO memberDTO = new MemberDTO();
//        memberDTO.setId(memberEntity.getId());
//        memberDTO.setCategory(memberEntity.getCategory());
//        memberDTO.setRisk(memberEntity.getRisk());
//        memberDTO.setPayload(memberEntity.getPayload());
//        return memberDTO;
//    }
//}
