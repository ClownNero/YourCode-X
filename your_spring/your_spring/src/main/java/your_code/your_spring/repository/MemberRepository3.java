package your_code.your_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import your_code.your_spring.entity.MemberEntity3;

public interface MemberRepository3 extends JpaRepository<MemberEntity3, String> {

}