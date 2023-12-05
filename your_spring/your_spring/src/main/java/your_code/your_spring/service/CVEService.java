package your_code.your_spring.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import your_code.your_spring.entity.CVEEntity;
import your_code.your_spring.repository.CVERepository;

import java.util.List;

@Service
@AllArgsConstructor
public class CVEService {
    private final CVERepository cveRepository;
    public List<CVEEntity> getId() {
        return cveRepository.findAll();
    }
}