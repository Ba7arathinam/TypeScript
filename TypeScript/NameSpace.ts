 // tsc typescript.ts --outfile javascript.js
 
 export namespace Add{
    export function adding(a:number):number{

        return a+90;

    }
}



// LoanModule.ts

// export module LoanModule {
//     export function calculateLoanAmount(
//       principle: number,
//       tenure: number,
//       interestRate: number
//     ): number {
//       const rate = interestRate / 100;
//       const totalAmount = principle + principle * rate * tenure;
//       return totalAmount;
//     }
  
//     export function calculateMonthlyEMI(
//       principle: number,
//       tenure: number,
//       interestRate: number
//     ): number {
//       const rate = interestRate / 100;
//       const monthlyInterest = rate / 12;
//       const numberOfPayments = tenure * 12;
//       const emi =
//         (principle * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
//         (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
  
//       return emi;
//     }
//   }
  
//   // main.ts
  
//   import { LoanModule } from './LoanModule';
  
//   function displayLoanDetails(loanType: string, principle: number, tenure: number, interestRate: number): void {
//     console.log(`Loan Type: ${loanType}`);
//     console.log(`Principle Amount: $${principle}`);
//     console.log(`Rate of Interest: ${interestRate}%`);
//     console.log(`Tenure: ${tenure} years`);
  
//     const totalAmount = LoanModule.calculateLoanAmount(principle, tenure, interestRate);
//     const monthlyEMI = LoanModule.calculateMonthlyEMI(principle, tenure, interestRate);
  
//     console.log(`Total Amount Payable: $${totalAmount.toFixed(2)}`);
//     console.log(`Monthly EMI: $${monthlyEMI.toFixed(2)}`);
//     console.log('\n');
//   }
  
//   // Example usage
//   displayLoanDetails('Personal Loan', 50000, 5, 10.5);
//   displayLoanDetails('Car Loan', 100000, 7, 8.85);
//   displayLoanDetails('Home Loan', 200000, 10, 11.75);
  



// GeometryNamespace.ts

// namespace Geometry {
//     export namespace Shapes {
//       export class Circle {
//         constructor(public radius: number) {}
  
//         calculateArea(): number {
//           return Math.PI * Math.pow(this.radius, 2);
//         }
  
//         calculatePerimeter(): number {
//           return 2 * Math.PI * this.radius;
//         }
//       }
  
//       export class Rectangle {
//         constructor(public width: number, public height: number) {}
  
//         calculateArea(): number {
//           return this.width * this.height;
//         }
  
//         calculatePerimeter(): number {
//           return 2 * (this.width + this.height);
//         }
//       }
//     }
  
//     export namespace Utilities {
//       export function calculateArea(shape: Shapes.Circle | Shapes.Rectangle): number {
//         return shape.calculateArea();
//       }
  
//       export function calculatePerimeter(shape: Shapes.Circle | Shapes.Rectangle): number {
//         return shape.calculatePerimeter();
//       }
//     }
//   }
  
  // main.ts
  
//   import { Geometry } from './GeometryNamespace';
  
  // Using the Geometry namespace
//   const circle = new Geometry.Shapes.Circle(5);
//   const rectangle = new Geometry.Shapes.Rectangle(4, 6);
  
//   console.log('Circle Area:', Geometry.Utilities.calculateArea(circle));
//   console.log('Circle Perimeter:', Geometry.Utilities.calculatePerimeter(circle));
  
//   console.log('Rectangle Area:', Geometry.Utilities.calculateArea(rectangle));
//   console.log('Rectangle Perimeter:', Geometry.Utilities.calculatePerimeter(rectangle));
  