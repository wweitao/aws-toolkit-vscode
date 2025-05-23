/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { LicenseUtil } from '../../codewhisperer/util/licenseUtil'
import { CodeReference } from '../../codewhispererChat/view/connector/connector'

// Currently importing ChatItemType in Mynah UI from the vscode side causes an error
// TODO remove this once the import stops failing
export type ChatItemType =
    | 'prompt'
    | 'system-prompt'
    | 'ai-prompt'
    | 'answer'
    | 'answer-stream'
    | 'answer-part'
    | 'code-result'

export const referenceLogText = (reference: CodeReference) =>
    `[${new Date().toLocaleString()}] Accepted recommendation from Amazon Q. Code provided with reference under <a href="${LicenseUtil.getLicenseHtml(
        reference.licenseName
    )}" target="_blank">${reference.licenseName}</a> license from repository <a href="${
        reference.url
    }" target="_blank">${reference.repository}</a>.<br><br>`
