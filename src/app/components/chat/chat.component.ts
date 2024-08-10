import { Component } from '@angular/core';
import { Action, Chat } from '../../interfaces/chat.interfaces';

@Component({
  selector: 'ng-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  chats: Chat[] = [
    {
      message: 'Hello',
      sender: 'me',
    },
    {
      message: 'Hi',
      sender: 'govt',
    },
  ];

  actions: Action[] = [
    { message: 'Action 1', action: () => alert('1') },
    { message: 'Action 2', action: () => alert('2') },
    { message: 'Action 3', action: () => alert('3') },
  ];
}
