#!/bin/sh

# install packages
packages="tmux git gcc neovim ripgrep fzf musl-dev"
apk add $packages

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
