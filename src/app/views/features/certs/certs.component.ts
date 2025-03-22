import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.scss']
})
export class CertsComponent implements OnInit {

  certs = [
    {
      name: 'JennieRubyJane',
      created_at: '2021-12-26 20:30:08',
      display_name: 'Jennie',
      ascope: 'JWT',
      type: 'x509',
      crypto_algorithm: 'RSA',
      bit_size: '4096',
      expire_in_years: '中華民國'
    },
    {
      name: 'JennieRubyJane',
      created_at: '2021-12-26 20:30:08',
      display_name: 'Jennie',
      ascope: 'JWT',
      type: 'x509',
      crypto_algorithm: 'RSA',
      bit_size: '4096',
      expire_in_years: '中華民國'
    },
    {
      name: 'JennieRubyJane',
      created_at: '2021-12-26 20:30:08',
      display_name: 'Jennie',
      ascope: 'JWT',
      type: 'x509',
      crypto_algorithm: 'RSA',
      bit_size: '4096',
      expire_in_years: '中華民國'
    },
    {
      name: 'JennieRubyJane',
      created_at: '2021-12-26 20:30:08',
      display_name: 'Jennie',
      ascope: 'JWT',
      type: 'x509',
      crypto_algorithm: 'RSA',
      bit_size: '4096',
      expire_in_years: '中華民國'
    },
    {
      name: 'JennieRubyJane',
      created_at: '2021-12-26 20:30:08',
      display_name: 'Jennie',
      ascope: 'JWT',
      type: 'x509',
      crypto_algorithm: 'RSA',
      bit_size: '4096',
      expire_in_years: '中華民國'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
