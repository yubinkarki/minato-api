## Minato API

<img src="images/hero.jpg" width="500" height="280" />

The name comes from the Japanese character「港」which means (ship) harbor  
It's pronunciations are minato・みなと as the kunyomi「訓」and kou・コウ as the onyomi「音」  
Also, speaking of 'Minato' we can't forget the 'Yellow Flash' of Konohagakure, right? ⚡️

#### Some words that use the onyomi are as follows:

- 空港 ➜ `くうこう・kuukou` ➜ airport
- 港湾 ➜ `こうわん・kouwan` ➜ harbor, port
- 入港 ➜ `にゅうこう・nyuukou` ➜ arrival of a ship
- 母港 ➜ `ぼこう・bokou` ➜ home port

## File Import Conventions

- Avoid barrel import files (causes circular dependency)
- System level imports > Third-party imports > First-party imports
- If the named import expands to take up multiple lines, import \* from the file
- Import directly from file using the path alias like #constant, #config, #util, etc
- Use the filename initials as the alias when importing all from a module (e.g. PC for public.controller.ts)

## Response Format

#### Success (JSON)

```
{
    "success": true,
    "timestamp": "2026-03-16 12:25:45",
    "messageType": "string" | "object" | "array" | "number" | "undefined";
    "message":
        | string
        | (string | number | object)[]
        | Record<string | number, string | number | object | (string | number | object)[]>
}
```

#### Error (JSON)

```
{
    "success": false,
    "timestamp": "2026-03-16 12:45:29",
    "messageType": "string" | "object" | "array" | "number" | "undefined";
    "message":
        | string
        | (string | number | object)[]
        | Record<string | number, string | number | object | (string | number | object)[]>
}
```
