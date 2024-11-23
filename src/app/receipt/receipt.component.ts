import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
  dummyData = [
    {
      doc_num: "001",
      date: "2024-11-01",
      received_from: "John Doe",
      received_in: "Bank A",
      amount: "5000",
      status: "Completed",
      remarks: "Payment processed successfully"
    },
    {
      doc_num: "002",
      date: "2024-11-02",
      received_from: "Jane Smith",
      received_in: "Bank B",
      amount: "3000",
      status: "Pending",
      remarks: "Awaiting approval"
    },
    {
      doc_num: "003",
      date: "2024-11-03",
      received_from: "Acme Corp",
      received_in: "Bank C",
      amount: "10000",
      status: "Failed",
      remarks: "Insufficient funds"
    },
    {
      doc_num: "004",
      date: "2024-11-04",
      received_from: "John Johnson",
      received_in: "Bank D",
      amount: "7500",
      status: "Completed",
      remarks: "Transaction complete"
    },
    {
      doc_num: "005",
      date: "2024-11-05",
      received_from: "Emily White",
      received_in: "Bank E",
      amount: "1500",
      status: "Completed",
      remarks: "Small payment"
    }
  ];


}
