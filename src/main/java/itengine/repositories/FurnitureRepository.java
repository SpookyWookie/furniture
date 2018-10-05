package itengine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import itengine.models.Furniture;

public interface FurnitureRepository extends JpaRepository<Furniture, Integer>{

    public boolean existsByCode(String code);

}
