import { Command } from "./types/command.type";

export class CommandService{
  commands: Command[]

  constructor(){
    this.commands = []
  }

  public addCommand(command: Command){
    this.commands.push(command)
  }

  public execCommand(name: string){
    const command = this.commands.find(command => command.name === name)

    if(command){
      command.exec()
    } else {
      console.log(`Command ${name} not found`)
    }
  }

}