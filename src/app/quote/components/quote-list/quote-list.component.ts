import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  messages: any[] = [];
  private _hubConnection: HubConnection | undefined;

  constructor() {
  }

  startBroadcasting() {
    if (this._hubConnection) {
      this._hubConnection.invoke('StartBroadcasting');
    }
  }

  ngOnInit() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:61710/quotes', { transport: signalR.HttpTransportType.LongPolling })
      .configureLogging(signalR.LogLevel.Information)
      .build();
    this._hubConnection.start().catch(err => console.error(err.toString()));

    this._hubConnection.on('updateQuote', (data: any) => {
      this.messages.push(data);
      }
    );
  }
}
