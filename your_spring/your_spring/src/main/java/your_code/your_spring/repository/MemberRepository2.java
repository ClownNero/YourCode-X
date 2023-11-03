package your_code.your_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import your_code.your_spring.entity.MemberEntity2;

public interface MemberRepository2 extends JpaRepository<MemberEntity2, String> {

}