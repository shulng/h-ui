export interface ConfigDto {
  key: string;
}

export interface ConfigsDto {
  keys: Array<string>;
}

export interface ConfigVo {
  key: string;
  value: string;
}

export interface ConfigsUpdateDto {
  key: string;
  value: string;
}

export interface ConfigUpdateDto {
  configUpdateDtos: Array<ConfigsUpdateDto>;
}

export interface Hysteria2ServerConfig {
  listen: string;
  tls?: {
    cert: string;
    key: string;
  };
  acme?: {
    domains: string[];
    email: string;
    ca: string;
    disableHTTP: boolean;
    disableTLSALPN: boolean;
    altHTTPPort: number;
    altTLSALPNPort: number;
    dir: string;
    listenHost: string;
  };
  obfs?: {
    type: string;
    salamander: {
      password: string;
    };
  };
  quic?: {
    initStreamReceiveWindow?: number;
    maxStreamReceiveWindow?: number;
    initConnReceiveWindow?: number;
    maxConnReceiveWindow?: number;
    maxIdleTimeout?: string;
    maxIncomingStreams?: number;
    disablePathMTUDiscovery?: boolean;
  };
  bandwidth?: {
    up: string;
    down: string;
  };
  ignoreClientBandwidth?: boolean;
  speedTest?: boolean;
  disableUDP?: boolean;
  udpIdleTimeout?: string;
  resolver?: {
    type: string;
    tcp?: {
      addr: string;
      timeout: string;
    };
    udp?: {
      addr: string;
      timeout: string;
    };
    tls?: {
      addr: string;
      timeout: string;
      sni: string;
      insecure: boolean;
    };
    https?: {
      addr: string;
      timeout: string;
      sni: string;
      insecure: boolean;
    };
  };
  acl?: {
    file?: string;
    inline?: string[];
    geoip?: string;
    geosite?: string;
    geoUpdateInterval?: string;
  };
  outbounds?: Hysteria2ServerConfigOutbound[];
  trafficStats: {
    listen: string;
  };
  masquerade?: {
    type: string;
    file?: {
      dir: string;
    };
    proxy?: {
      url: string;
      rewriteHost: boolean;
    };
    string?: {
      content: string;
      headers?: { [key: string]: string };
      statusCode?: number;
    };
    listenHTTP?: string;
    listenHTTPS?: string;
    forceHTTPS?: boolean;
  };
}

export const defaultHysteria2ServerConfig: Hysteria2ServerConfig = {
  listen: ":443",
  tls: {
    cert: "",
    key: "",
  },
  acme: {
    domains: [],
    email: "",
    ca: "zerossl",
    disableHTTP: false,
    disableTLSALPN: false,
    altHTTPPort: 80,
    altTLSALPNPort: 443,
    dir: "my_acme_dir",
    listenHost: "0.0.0.0",
  },
  obfs: {
    type: "salamander",
    salamander: {
      password: "cry_me_a_r1ver",
    },
  },
  quic: {
    initStreamReceiveWindow: 8388608,
    maxStreamReceiveWindow: 8388608,
    initConnReceiveWindow: 20971520,
    maxConnReceiveWindow: 20971520,
    maxIdleTimeout: "30s",
    maxIncomingStreams: 1024,
    disablePathMTUDiscovery: false,
  },
  bandwidth: {
    up: "1 gbps",
    down: "1 gbps",
  },
  ignoreClientBandwidth: false,
  speedTest: false,
  disableUDP: false,
  udpIdleTimeout: "60s",
  resolver: {
    type: "",
    tcp: {
      addr: "8.8.8.8:53",
      timeout: "4s",
    },
    udp: {
      addr: "8.8.4.4:53",
      timeout: "4s",
    },
    tls: {
      addr: "1.1.1.1:853",
      timeout: "10s",
      sni: "cloudflare-dns.com",
      insecure: false,
    },
    https: {
      addr: "1.1.1.1:443",
      timeout: "10s",
      sni: "cloudflare-dns.com",
      insecure: false,
    },
  },
  acl: {
    file: undefined,
    inline: undefined,
    geoip: undefined,
    geosite: undefined,
    geoUpdateInterval: undefined,
  },
  outbounds: [],
  trafficStats: {
    listen: ":9999",
  },
  masquerade: {
    type: "",
    file: {
      dir: "",
    },
    proxy: {
      url: "",
      rewriteHost: true,
    },
    string: {
      content: "hello stupid world",
      headers: undefined,
      statusCode: 200,
    },
    listenHTTP: ":80",
    listenHTTPS: ":443",
    forceHTTPS: true,
  },
};

export interface Hysteria2ServerConfigOutbound {
  name: string;
  type: string;
  socks5?: {
    addr: string;
    username?: string;
    password?: string;
  };
  http?: {
    url: string;
    insecure: boolean;
  };
  direct?: {
    mode: string;
    bindIPv4: string;
    bindIPv6: string;
    bindDevice: string;
  };
}
