package your_code.your_spring.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "list")

public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
    private String detailpayload;
}