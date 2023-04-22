package com.universitydive.unidive.service;

import com.universitydive.unidive.model.UniDive;
import com.universitydive.unidive.repository.UniDiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniDiveServiceImpl implements UniDiveService{
    @Autowired
    private UniDiveRepository uniDiveRepository;
    @Override
    public UniDive saveuniDive(UniDive uniDive) {
        return uniDiveRepository.save(uniDive);
    }

    @Override
    public List<UniDive> getAllUniversities() {
        return uniDiveRepository.findAll();
    }
}
