import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Company } from '../models';

@Injectable()
export class CompanyService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Company[]>(`${environment.apiUrl}/companies`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/companies/` + id);
    }

    register(company: Company) {
        return this.http.post(`${environment.apiUrl}/companies/newcompany`, company);
    }

    update(company: Company) {
        return this.http.put(`${environment.apiUrl}/companies/` + company.id, company);
    }

}