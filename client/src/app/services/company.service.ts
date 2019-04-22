import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from '../models';
import { environment } from '../environment/environment';

@Injectable()
export class CompanyService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Company[]>(`${environment.server}/companies`);
    }

    getById(id: number) {
        return this.http.get(`${environment.server}/companies/` + id);
    }

    register(company: Company) {
        return this.http.post(`${environment.server}/companies/newcompany`, company);
    }

    update(company: Company) {
        return this.http.put(`${environment.server}/companies/` + company.id, company);
    }

}