{ pkgs }: {
    deps = with pkgs; [
        nodejs-16_x
        nodePackages.typescript-language-server
        haskellPackages.dotenv
        dotenv-linter
    ];
}