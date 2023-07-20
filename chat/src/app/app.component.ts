import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocketService } from './services/socket.service';
import { Observable, timeInterval } from 'rxjs';

interface ChatMessage {
  type: string,
  message: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  chatForm: any;
  chats:ChatMessage[] = []
  userMessages: any[] = []
  message: ChatMessage = {
    type: '',
    message: ''
  }
  chatMessages$: any
  constructor(private fb: FormBuilder, private socketService: SocketService){
    this.chatMessages$ = this.socketService.message$
  }

  ngOnInit(): void {
    
    this.chatForm = this.fb.group({
      "message": [null]
    })

    this.socketService.listen()
    this.chatMessages$.subscribe((data: never) => {
      this.message = {
        type: 'bot',
        message: data
      }
      this.chats.push(this.message)
    })
  }

  getMessage(){
    let message:ChatMessage = {
      type: 'user',
      message: this.chatForm.controls.message.value
    }
    let msg = this.chatForm.controls.message.value
    this.socketService.emit(msg)
    this.chats.push(message)
    // this.userMessages.push()
    this.chatForm.reset()
  }

}
