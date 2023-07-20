import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public message$: Subject<string> = new Subject<string>
  socket: any
  readonly url: string = 'http://localhost:8000'
  // readonly url: string = ''
  constructor() {
    this.socket = io.io(this.url)
  }

  emit(message: string): void {
    setTimeout(()=>{
      this.socket.emit("msg", message)
    }, 2000)
  }

  listen(): void {
    this.socket.on("message", (msg: string) => {
      this.message$.next(msg)
    })
  }

  disconnect(eventName = 'disconnect'): void {
    this.socket.emit(eventName)
  }
}
