# **Environment MacOS**

## 1. Desabilitar seguridad del sistema

- Reiniciar en Modo Recovery. Apagar la macbook y volverla a encender, y ni bien enciende, presionar:  
 ` command + R`  

- Abrir la terminal
- Correr el comando `csrutil disable`
- Reiniciar  
  
---
       
> Los siguientes pasos se hacen en la terminal  

> Todos los comandos que incluyen el flag --cask, se isntala la version de escritorio, en caso contrario la version para terminal  

## 2. Instalar Homebrew
Ejecutar el siguiente comando:

`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
`

## 3. Instalar Composer
`brew install composer`

## 4. Instalar Git
`brew install git`

## 5. Instalar PHP (última versión)
`brew install php`  
para otra version anterior: 
`brew install php@7.4`

## 6. Instalar DBngin
DBngin instala y administra Mysql, PostgreSQL y Redis.  
`brew install --cask dbngin`

## 7. Instalar Sequel-Ace
Sequel-Ace es el cliente para DB  
`brew install --cask sequel-ace`

## 8. Instalar NVM (Node Version Manager)
`brew install nvm`   
Luego agregar en .zshrc:   
`export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
`

## 9. Instalar Yarn
`brew install yarn`

## 10. Instalar Docker Desktop (opcional)
>Automaticamente determinar si es para Intel o Apple Silicon  

`brew install --cask docker`

## 11. Instalar Fork (Cliente de Git)
`brew install --cask fork`

## 12. Instalar Visual Studio Code
`brew install --cask visual-studio-code`

## 13. Instalar Laravel Valet
`composer global require laravel/valet`

luego:
`valet install`

Se debera confiar para que no pregunte por el password cada vez que se ejecuta un comando:  
`valet trust`

## 14. Instalar PHP Monitor 
App que mustra la version activa de php y permite switchear a otra   
`brew tap nicoverbruggen/homebrew-cask`   
`brew install --cask phpmon`

---

### Uso de Valet
En la raiz del proyecto laravel o symfony correr    
`valet link`

luego, suponiendo que la carpeta del proyecto se llame *proyectolaravel* ejecutar el siguiente comando con el mismo nombre para instalar un certificado de seguridad para https:  
`valet secure <nombre de la carpeta>`  
en el ejemplo quedaria ***valet secure proyectolaravel***

luego de esto ya puede vistitar en el navegador: ***https://proyectolaravel.test***



 

