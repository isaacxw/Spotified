# Spotified

Visualize your Spotify listening habits with Spotified!

This project uses nvm, which needs to be invoked at each new session.
Refer to https://github.com/nvm-sh/nvm for more information.

### NVM Setup
1. Install and update script using 
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash`

2. Load up `nvm` once the install script has ran
`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
 [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
 
3. Verify that `nvm` has been installed by running `command -v nvm`. If the installation worked, you should see `nvm`
displayed in your console.