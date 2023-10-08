```mermaid
---
title: YourCode Internal Code
---
flowchart TD

    style A fill:#000000, stroke:#87CEEB,stroke-width:2px;
    style B fill:#000000,stroke:#87CEEB,stroke-width:2px;
    style X fill:#000000,stroke:#87CEEB,stroke-width:2px;

    style SQLI fill:#000000,stroke:red,stroke-width:2px;
    style XSS fill:#000000,stroke:#ff0000,stroke-width:2px;
    style DIRINDEX fill:#000000,stroke:#ff0000,stroke-width:2px;
    style FILEUP fill:#000000,stroke:#ff0000,stroke-width:2px;
    style FILEDOWN fill:#000000,stroke:#ff0000,stroke-width:2px;

    subgraph INIT[== Enter URL ==]
        A[YourCode-X] --url--> B[Internal code]
    end

    B --> X[Vulnerability Check]
    
    
    X --Target url--> SQLI[Result 1]
    X --Target url--> XSS[Result 2]
    X --Target url--> DIRINDEX[hello]
    X --Target url--> FILEUP[hello]
    X --Target url--> FILEDOWN[hello]

    subgraph CHECK1[1]
        SQLI[Result 1] --> t1[test1]
        SQLI[Result 1] --> t2[test2]
        SQLI[Result 1] --> t3[test1]
        SQLI[Result 1] --> t4[test1]
    end
    
