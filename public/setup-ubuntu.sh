#!/bin/bash

# install packages
apt update && apt upgrade
packages="tmux git gcc ninja-build gettext cmake curl build-essential ripgrep fzf"
apt install -y $packages

# install nvim
cd ~
git clone https://github.com/neovim/neovim.git
cd neovim
make CMAKE_BUILD_TYPE=Release
make install
cd ..
rm -rf neovim
touch ~/.bashrc
echo "alias v=nvim" >> ~/.bashrc

# configure
mkdir ~/.config/
# tmux config
git clone https://github.com/Josh-LeBlanc/tmux-config.git ~/tmux-config
cp ~/tmux-config/.tmux.conf ~
rm -rf ~/tmux-config
# nvim config
git clone https://github.com/Josh-LeBlanc/nvim-dots.git ~/.config/nvim
cd ~/.config/nvim
git switch universal

# back to home dir
cd
