import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  name: string;
  age: number;
  department: string;
  available: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  teamMembers: TeamMember[] = [
    {
      name: 'Ahmed',
      age: 28,
      department: 'Development',
      available: true
    },
    {
      name: 'Esraa',
      age: 24,
      department: 'Development',
      available: true
    },
    {
      name: 'Mona',
      age: 30,
      department: 'Marketing',
      available: false
    },
    {
      name: 'Omar',
      age: 26,
      department: 'Design',
      available: true
    }
  ];

  departments: string[] = [
    'All Departments',
    'Development',
    'Marketing',
    'Design'
  ];

  selectedDepartment: string = 'All Departments';

  viewMode: string = 'card';

  formData = {
    name: '',
    age: null as number | null,
    department: 'Development',
    available: false
  };

  addMember() {
    const name = this.formData.name.trim();
    const age = this.formData.age;

    if (!name) {
      alert('Please enter the member name.');
      return;
    }

    if (name.length < 2) {
      alert('Name must contain at least 2 characters.');
      return;
    }

    if (age === null || age < 18 || age > 100) {
      alert('Age must be between 18 and 100.');
      return;
    }

    if (!this.formData.department) {
      alert('Please select a department.');
      return;
    }

    this.teamMembers.push({
      name: name,
      age: age,
      department: this.formData.department,
      available: this.formData.available
    });

    this.formData = {
      name: '',
      age: null,
      department: 'Development',
      available: false
    };
  }

  toggleAvailability(member: TeamMember) {
    member.available = !member.available;
  }

  get filteredMembers(): TeamMember[] {
    if (this.selectedDepartment === 'All Departments') {
      return this.teamMembers;
    }

    return this.teamMembers.filter(
      member => member.department === this.selectedDepartment
    );
  }
}