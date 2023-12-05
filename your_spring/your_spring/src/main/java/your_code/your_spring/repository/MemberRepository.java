package your_code.your_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import your_code.your_spring.entity.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {

}
