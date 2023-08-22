FROM node:20

ENV DEVCONTAINER=true

# Updates packages
RUN apt update && apt install -y

# Install Yarn v3
RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Install lsd
RUN apt install lsd -y

# Install fish
RUN apt install fish -y

# Set fish as default shell
RUN echo /usr/bin/fish | tee -a /etc/shells
RUN chsh -s /usr/bin/fish
