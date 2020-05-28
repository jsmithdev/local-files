# Local File

Along with a browser extension, this allows typing and viewing of local/network directory or file in Salesforce

## Info

Browser extensions

[Chrome Extension: Github](https://github.com/tksugimoto/chrome-extension_open-local-file-link)
  
[Chrome Extension: Store](https://chrome.google.com/webstore/detail/enable-local-file-links/nikfmfgobenbhmocjaaboihbeocackld/related?hl=en)

Firefox is todo

- please open an issue and add link if one is found!

- needs to be opensource if at all possible

## Deploy

Covert with SFDX; This creates a folder called `deploy`

```bash
sfdx force:source:convert -r force-app -d deploy
```

Now you can deploy from the resulting `deploy` directory

📌  Below deploys to the default org set; Add `-u user@domain.com` or `-u alias` to deploy else where

```bash
sfdx force:mdapi:deploy -d deploy -w -1 --verbose
```

Results should more or less mirror below
```bash
Deployment finished in 121000ms

=== Result
Status:  Succeeded
jobid:  0Af3b000003ZSudCAG
Completed:  2019-05-17T14:39:25.000Z
Component errors:  0
Components deployed:  1
Components total:  1
Tests errors:  0
Tests completed:  1
Tests total:  0
Check only: false


=== Components Deployed [1]
TYPE                      FILE                            NAME           ID
────────────────────────  ──────────────────────────────  ─────────────  ──────────────────
                          deploy/package.xml              package.xml
LightningComponentBundle  deploy/lwc/localFile            localFile      0Rb3b0000004C9PCAU
```