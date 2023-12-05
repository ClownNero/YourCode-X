package your_code.your_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import your_code.your_spring.entity.CVEEntity;

public interface CVERepository extends JpaRepository<CVEEntity, String> {

}