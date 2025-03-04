# **Environment MacOS**

## Desabilitar seguridad del sistema

- Reiniciar en Modo Recovery. Apagar la macbook y volverla a encender, y ni bien enciende, presionar:  
 ```
 command + R
 ```  

- Abrir la terminal
- Correr el comando 
```
csrutil disable
```
- Reiniciar  
  
---
       
> Los siguientes pasos se hacen en la terminal  

> Todos los comandos que incluyen el flag --cask, se isntala la version de escritorio, en caso contrario la version para terminal  

## Instalar Homebrew
Ejecutar el siguiente comando:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Instalar Composer
```
brew install composer
```

## Instalar Git
```
brew install git
```

## Instaalr Github Desktop
```
brew install --cask github
```

## Instalar Oh My Zsh
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

fonts para el theme **Agnoster** 
```
https://github.com/powerline/fonts
```
, clonar, luego ```cd fonts``` y luego 
```
sh ./install.sh
```

luego setear en la terminal la font: ```Meslo LG S DZ for Powerline |  Regular```

## Agregar el Plugin Zsh-AutoSuggestions
```
brew install zsh-autosuggestions
```

luego agregar al final de **.zshrc**

```
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## Instalar Ghostty Terminal
```
brew install --cask ghostty
```

## Generador Config Ghostty
```
https://ghostty.zerebos.com/settings/colors
```

## Instalar Iterm2
```
brew install --cask iterm2
```

## Instalar Warp terminal
```
brew install --cask warp
```

## Instalar Hyper terminal
```
brew install --cask hyper
```

## Instalar PHP (última versión)
```
brew install php
```  
para otra version anterior: 
```
brew install php@7.4
```

## Instalar Xata CLI
```
brew tap xataio/brew && brew install xata
```

## Instalar DBngin
DBngin instala y administra Mysql, PostgreSQL y Redis.  
```
brew install --cask dbngin
```

## Instalar Sequel-Ace
Sequel-Ace es el cliente para DB  
```
brew install --cask sequel-ace
```

## Instalar DBeaver
```
brew install --cask dbeaver-community
```

## Instalar NVM (Node Version Manager)

```
brew install nvm
```   
Luego agregar en .zshrc:   
```
export NVM_DIR="$HOME/.nvm"   
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm   
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

## Instalar Pnpm
```
brew install pnpm
```

## Instalar Yarn
```
brew install yarn
```

## Instalar Vercel CLI
```
npm i -g vercel
```

## Instalar Orbstack
```
brew install orbstack
```

## Instalar Docker Desktop (opcional)
>Automaticamente determinar si es para Intel o Apple Silicon  

```
brew install --cask docker
```

## Instalar Fork (Cliente de Git)
```
brew install --cask fork
```

## Instalar JetBrains Fleet
```
brew install --cask fleet
```

## Instalar Visual Studio Code
```
brew install --cask visual-studio-code
```

## Instalar Cursor
```
brew install --cask cursor
```

## Instalar Zed
```
brew install --cask zed
```

## Instalar Laravel Herd
```
brew install --cask herd
```

## Instalar Laravel Valet
```
composer global require laravel/valet
```

luego:
```
valet install
```

Se debera confiar para que no pregunte por el password cada vez que se ejecuta un comando:  
```
valet trust
```

## Instalar PHP Monitor 
App que mustra la version activa de php y permite switchear a otra   
```
brew tap nicoverbruggen/homebrew-cask
```   

```
brew install --cask phpmon
```

## Instalar Android Studio
```
brew install --cask android-studio
```

## Instalar Flutter
```
brew install --cask flutter
```

Para resolver el error `Error running pod install` en Macs con M1 o posteriores    
```
sudo arch -x86_64 gem install ffi
```

## Instalar MiniSim
```
brew install --cask minisim
```

## Instalar OpenJDK 11

```
brew install openjdk@11
```

Luego linkear:   
```
sudo ln -sfn $(brew --prefix)/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk
```


## Instalar Responsively

```
brew install --cask responsively
```


---

### Uso de Valet
En la raiz del proyecto laravel o symfony correr    
```
valet link
```

luego, suponiendo que la carpeta del proyecto se llame *proyectolaravel* ejecutar el siguiente comando con el mismo nombre para instalar un certificado de seguridad para https:  
```
valet secure <nombre de la carpeta>
```  
en el ejemplo quedaria ***valet secure proyectolaravel***

luego de esto ya puede vistitar en el navegador: ***https://proyectolaravel.test***


---
### OTROS

## Instalar Cloudflare Warp
```
brew install --cask cloudflare-warp
```

## Instalar LM Studio
```
brew install --cask lm-studio
```


## Instalar Spark
```
brew install --cask readdle-spark
```

## Instalar Insomnia
```
brew install --cask insomnia
```

## Instalar Arc
```
brew install --cask arc
```

## Instalar Chrome
```
brew install --cask google-chrome
```

## Instalar Plex Media Server
```
brew install --cask plex-media-server
```

## Instalar App Cleaner
```
brew install --cask appcleaner
```

## Instalar Native Access
```
brew install --cask native-access
```

## Instalar Engine Dj
```
brew install --cask engine-dj
```

## Instalar Rekordbox
```
brew install --cask rekordbox
```

## Instalar Whatsapp
```
brew install --cask whatsapp
```

## instalar Telegram
```
brew install --cask telegram
```

## Instalar Slack
```
brew install --cask slack
```

## Instalar Transmission
```
brew install --cask transmission
```


## Instalar Discord
```
brew install --cask discord
```

## Instalar Keka (Descompresor)
```
brew install --cask keka
```

## Instalar Mipony
```
brew install --cask mipony
```
 
## Instalar Google Drive
```
brew install --cask google-drive
```

## Instalar Skype
```
brew install --cask skype
```

## Instalar Spotify
```
brew install --cask spotify
```

## Crear ssh key
```
ssh-keygen -t rsa -b 2048 -C "<comment>"
```

## Instalar OBS (Open Broadcaster Software)
```
brew install --cask obs
```

## Instalar Numi Calculator
```
brew install --cask numi
```


### Instalar Adobe Creative 
```
brew install --cask adobe-creative-cloud
```

### Instalar Resolume Arena
```
brew install --cask resolume-arena
```

### Instalar Battery
```
brew install --cask battery
```

### Instalar Steam
```
brew install --cask steam
```

### Instalar MS Teams
```
brew install --cask microsoft-teams
```

