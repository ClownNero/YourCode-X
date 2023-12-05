package your_code.your_spring.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "cve")
public class CVEEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cve_id;

    private Integer ov;
    private Integer mc;
    private Integer si;
    private Integer xss;
    private Integer dt;
    private Integer fi;
    private Integer csrf;
    private Integer xxe;
    private Integer ssrf;
    private Integer opr;
    private Integer iv;

}
