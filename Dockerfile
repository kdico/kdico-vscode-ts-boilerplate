FROM node:20

ENV JAVA_PKG=https://download.oracle.com/java/22/latest/jdk-22_linux-aarch64_bin.tar.gz \
  JAVA_HOME=/usr/java/jdk-22

RUN set -eux; \
  JAVA_SHA256=$(curl "$JAVA_PKG".sha256) ; \
  curl --output /tmp/jdk.tar.gz "$JAVA_PKG" && \
  echo "$JAVA_SHA256 */tmp/jdk.tar.gz" | sha256sum --check; \
  mkdir --parents "$JAVA_HOME" && \
  tar --extract --file /tmp/jdk.tar.gz --directory "$JAVA_HOME" --strip-components 1;
