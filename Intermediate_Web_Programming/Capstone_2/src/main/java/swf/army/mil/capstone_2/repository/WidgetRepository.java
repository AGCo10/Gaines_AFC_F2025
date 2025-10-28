package swf.army.mil.capstone_2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import swf.army.mil.capstone_2.entity.Widget;

@Repository
public interface WidgetRepository extends JpaRepository<Widget, Long> {

}
