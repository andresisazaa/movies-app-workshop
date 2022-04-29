import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements OnInit {
  @Output() search: EventEmitter<{ query: string; type: string }>;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.search = new EventEmitter<{ query: string; type: string }>();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.searchForm = this.fb.group({
      query: [null, Validators.required],
      type: [null, Validators.required],
    });
  }

  onFormSubmit(): void {
    if (this.searchForm.valid) {
      const searchData = this.searchForm.value;
      this.search.emit(searchData);
    }
  }

  get query(): FormControl {
    return this.searchForm.get('query') as FormControl;
  }

  get type(): FormControl {
    return this.searchForm.get('type') as FormControl;
  }
}
