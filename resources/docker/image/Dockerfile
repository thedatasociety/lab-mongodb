FROM ubuntu:19.04

RUN apt-get -qq update && \
    apt-get -qq install --yes --no-install-recommends locales curl git htop vim wget python3-pip less unzip \

# Set up locales properly
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen

ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

# Use bash as default shell, rather than sh
ENV SHELL /bin/bash

# Set up user
ARG NB_USER=thedatasociety
ARG NB_UID=1000
ARG GIT_PREFIX=https://github.com
ARG GIT_USER=thedatasociety
ARG GIT_REPO=lab-template

ENV USER ${NB_USER}
ENV HOME /home/${NB_USER}
RUN adduser --disabled-password \
    --gecos "Default user" \
    --uid ${NB_UID} \
    ${NB_USER}

# nodejs 10
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs

WORKDIR /jupyter/data/

# building the repo
RUN git clone ${GIT_PREFIX}/${GIT_USER}/${GIT_REPO}
WORKDIR /jupyter/data/${GITHUB_REPO}

RUN apt-get install $(grep -vE "^\s*#" ./binder/apt.txt  | tr "\n" " ")
RUN pip3 install -r ./binder/requirements.txt
RUN chmod +x binder/postBuild

RUN apt-get -qq purge && \
    apt-get -qq clean && \
    apt-get autoclean  -y && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*

# RUN mkdir conda-bld
# RUN rm conda-bld -R

# We always want containers to run as non-root
USER ${NB_USER}

# Make sure that postBuild scripts are marked executable before executing them
RUN chmod +x binder/postBuild
RUN ./binder/postBuild

# Specify the default command to run
CMD ["jupyter", "notebook", "--ip", "0.0.0.0"]

CMD jupyter-lab --ip=0.0.0.0 --port=8888 --no-browser --notebook-dir=/jupyter/data --allow-root --NotebookApp.token=''