# **Environment MacOS**

## 1. Desabilitar seguridad del sistema

- Reiniciar en Modo Recovery. Apagar la macbook y volverla a encender, y ni bien enciende, presionar:  
 ```command + R```  

- Abrir la terminal
- Correr el comando ```csrutil disable```
- Reiniciar  
  
---
       
> Los siguientes pasos se hacen en la terminal  

> Todos los comandos que incluyen el flag --cask, se isntala la version de escritorio, en caso contrario la version para terminal  

## 2. Instalar Homebrew
Ejecutar el siguiente comando:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 3. Instalar Composer
```brew install composer```

## 4. Instalar Git
```brew install git```

## 5. Instalar Oh My Zsh
```sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"```

fonts para el theme **Agnoster** ```https://github.com/powerline/fonts```, clonar, 

luego ```cd fonts``` y luego ```sh ./install.sh```

luego setear en la terminal la font: ```Meslo LG S DZ for Powerline |  Regular```

## Agregar el Plugin Zsh-AutoSuggestions
```brew install zsh-autosuggestions```

luego agregar al final de **.zshrc**
```source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh```

## 6. Instalar PHP (última versión)
```brew install php```  
para otra version anterior: 
```brew install php@7.4```

## 7. Instalar DBngin
DBngin instala y administra Mysql, PostgreSQL y Redis.  
```brew install --cask dbngin```

## 8. Instalar Sequel-Ace
Sequel-Ace es el cliente para DB  
```brew install --cask sequel-ace```

## 9. Instalar NVM (Node Version Manager)
```brew install nvm```   
Luego agregar en .zshrc:   
```export NVM_DIR="$HOME/.nvm"   
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm   
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

## 10. Instalar Yarn
```brew install yarn```

## 11. Instalar Docker Desktop (opcional)
>Automaticamente determinar si es para Intel o Apple Silicon  

```brew install --cask docker```

## 12. Instalar Fork (Cliente de Git)
```brew install --cask fork```

## 13. Instalar Visual Studio Code
```brew install --cask visual-studio-code```

## 14. Instalar Laravel Valet
```composer global require laravel/valet```

luego:
```valet install```

Se debera confiar para que no pregunte por el password cada vez que se ejecuta un comando:  
```valet trust```

## 15. Instalar PHP Monitor 
App que mustra la version activa de php y permite switchear a otra   
```brew tap nicoverbruggen/homebrew-cask```   
```brew install --cask phpmon```

## 16. Instalar Android Studio
```brew install --cask android-studio```

## 17. Instalar Flutter
```brew install --cask flutter```

Para resolver el error ```Error running pod install``` en Macs con M1 o posteriores    
```sudo arch -x86_64 gem install ffi```

## 18. Instalar OpenJDK 11
```brew install openjdk@11```

Luego linkear:   
```sudo ln -sfn $(brew --prefix)/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk```

## 19. Instalar Iterm2
```brew install --cask iterm2```

## 20. Instalar Warp terminal
```brew install --cask warp```

## 21. Instalar Pnpm
```brew install pnpm```

---

### Uso de Valet
En la raiz del proyecto laravel o symfony correr    
```valet link```

luego, suponiendo que la carpeta del proyecto se llame *proyectolaravel* ejecutar el siguiente comando con el mismo nombre para instalar un certificado de seguridad para https:  
```valet secure <nombre de la carpeta>```  
en el ejemplo quedaria ***valet secure proyectolaravel***

luego de esto ya puede vistitar en el navegador: ***https://proyectolaravel.test***


---
### OTROS

## Instalar Insomnia
```brew install --cask insomnia```

## Instalar Chrome
```brew install --cask google-chrome```

## Instalar Plex Media Server
```brew install --cask plex-media-server```

## Instalar App Cleaner
```brew install --cask appcleaner```

## Instalar Rekordbox
```brew install --cask rekordbox```

## Instalar Whatsapp
```brew install --cask whatsapp```

## Instalar Slack
```brew install --cask slack```

## Instalar Transmission
```brew install --cask transmission```


## Instalar Discord
```brew install --cask discord```

## Instalar Keka (Descompresor)
```brew install --cask keka```

## Instalar Mipony
```brew install --cask mipony```
 
## Instalar Google Drive
```brew install --cask google-drive```

## Instalar Skype
```brew install --cask skype```

## Instalar Spotify
```brew install --cask spotify```

## Crear ssh key
```ssh-keygen -t rsa -b 2048 -C "<comment>"```

## Instalar OBS (Open Broadcaster Software)
```brew install --cask obs```

