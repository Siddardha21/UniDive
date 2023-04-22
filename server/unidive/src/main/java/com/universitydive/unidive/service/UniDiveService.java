package com.universitydive.unidive.service;

import com.universitydive.unidive.model.UniDive;

import java.util.List;

public interface UniDiveService {
    public UniDive saveuniDive(UniDive uniDive);
    public List<UniDive> getAllUniversities();
}
