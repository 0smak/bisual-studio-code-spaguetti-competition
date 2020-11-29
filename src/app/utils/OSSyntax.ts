import { Injectable } from '@angular/core';
import { spawn } from 'child_process';

enum SyntaxType {
    RESERVED_VARS = 'rv_vars',
    RESERVED_OBJ_PROPS = 'rv_props',
    RESERVED_OTHER = 'rv_other',
}

export interface Syntax {
    es6: string,
    os: string
}

interface SyntaxTokens {
    syntax: Syntax[];
    type: SyntaxType
}

@Injectable({
    providedIn: 'root'
})
export class OSSyntax {
    public syntax: SyntaxTokens[] = [
        {
            syntax: [
                {
                    es6: 'console',
                    os: 'marta'
                },
                {
                    es6: 'log',
                    os: 'olea'
                },
                {
                    es6: 'abstract',
                    os: 'mart'
                },
                {
                    es6: 'arguments',
                    os: 'ole'
                },
                {
                    es6: 'await',
                    os: 'mar'
                },
                {
                    es6: 'boolean',
                    os: 'ol'
                },
                {
                    es6: 'break',
                    os: 'ma'
                },
                {
                    es6: 'byte',
                    os: 'oLEa'
                },
                {
                    es6: 'case',
                    os: 'mARtA'
                },
                {
                    es6: 'catch',
                    os: 'mo'
                },
                {
                    es6: 'char',
                    os: 'maol'
                },
                {
                    es6: 'class',
                    os: 'marole'
                },
                {
                    es6: 'const',
                    os: 'martolea'
                },
                {
                    es6: 'continue',
                    os: 'martaolea'
                },
                {
                    es6: 'debugged',
                    os: 'martaole'
                },
                {
                    es6: 'default',
                    os: 'martaol'
                },
                {
                    es6: 'delete',
                    os: 'martao'
                },
                {
                    es6: 'do',
                    os: 'MaaRta'
                },
                {
                    es6: 'double',
                    os: 'MaoleA'
                },
                {
                    es6: 'else',
                    os: 'mantequilla'
                },
                {
                    es6: 'enum',
                    os: 'ael'
                },
                {
                    es6: 'eval',
                    os: 'aelo'
                },
                {
                    es6: 'export',
                    os: 'at'
                },
                {
                    es6: 'extends',
                    os: 'atr'
                },
                {
                    es6: 'false',
                    os: 'atra'
                },
                {
                    es6: 'final',
                    os: 'atram'
                },
                {
                    es6: 'finally',
                    os: '_M'
                },
                {
                    es6: 'float',
                    os: 'MA'
                },
                {
                    es6: 'for',
                    os: 'MAR'
                },
                {
                    es6: 'function',
                    os: 'MART'
                },
                {
                    es6: 'goto',
                    os: 'MARTA'
                },
                {
                    es6: 'if',
                    os: 'cañones'
                },
                {
                    es6: 'implements',
                    os: 'OL'
                },
                {
                    es6: 'import',
                    os: 'OLE'
                },
                {
                    es6: 'in',
                    os: 'OLEA'
                },
                {
                    es6: 'instanceof',
                    os: 'MO'
                },
                {
                    es6: 'int',
                    os: 'MAOL'
                },
                {
                    es6: 'interface',
                    os: 'MAROLE'
                },
                {
                    es6: 'let',
                    os: 'MARTOLEA'
                },
                {
                    es6: 'long',
                    os: 'MARTAOLEA'
                },
                {
                    es6: 'native',
                    os: 'MaRtA'
                },
                {
                    es6: 'new',
                    os: 'OlEa'
                },
                {
                    es6: 'null',
                    os: 'Ma'
                },
                {
                    es6: 'package',
                    os: 'MaR'
                },
                {
                    es6: 'private',
                    os: 'MaRt'
                },
                {
                    es6: 'protected',
                    os: 'MaRtA'
                },
                {
                    es6: 'public',
                    os: 'Mar'
                },
                {
                    es6: 'return',
                    os: 'Mart'
                },
                {
                    es6: 'short',
                    os: 'Marta'
                },
                {
                    es6: 'static',
                    os: 'MAr'
                },
                {
                    es6: 'super',
                    os: 'MArt'
                },
                {
                    es6: 'switch',
                    os: 'MArta'
                },
                {
                    es6: 'synchronized',
                    os: 'MARt'
                },
                {
                    es6: 'this',
                    os: 'MARTa'
                },
                {
                    es6: 'throw',
                    os: 'Ol'
                },
                {
                    es6: 'throws',
                    os: 'Ole'
                },
                {
                    es6: 'transient',
                    os: 'Olea'
                },
                {
                    es6: 'true',
                    os: 'OLe'
                },
                {
                    es6: 'try',
                    os: 'OLea'
                },
                {
                    es6: 'typeof',
                    os: 'OLEa'
                },
                {
                    es6: 'var',
                    os: 'Mo'
                },
                {
                    es6: 'void',
                    os: 'Mol'
                },
                {
                    es6: 'volatile',
                    os: 'Mole'
                },
                {
                    es6: 'while',
                    os: 'Molea'
                },
                {
                    es6: 'with',
                    os: 'mol'
                },
                {
                    es6: 'yield',
                    os: 'mole'
                },],
            type: SyntaxType.RESERVED_VARS
        },
        {
            syntax: [
                {
                    es6: 'Array',
                    os: 'molea'
                },
                {
                    es6: 'Date',
                    os: 'maolea'
                },
                {
                    es6: 'eval',
                    os: 'marolea'
                },
                {
                    es6: 'function',
                    os: 'marta_olea'
                },
                {
                    es6: 'hasOwnProperty',
                    os: 'm_a_r_t_a_o_l_e_a'
                },
                {
                    es6: 'Infinity',
                    os: 'm_a_r_t_a___o_l_e_a'
                },
                {
                    es6: 'isFinite',
                    os: 'm0r0t0a0o0l0e0a'
                },
                {
                    es6: 'isNaN',
                    os: 'm4r740134'
                },
                {
                    es6: 'isPrototypeOf',
                    os: 'm4r74'
                },
                {
                    es6: 'length',
                    os: 'oleamarta'
                },
                {
                    es6: 'Math',
                    os: 'Olea_marta'
                },
                {
                    es6: 'NaN',
                    os: 'Olea__marta'
                },
                {
                    es6: 'name',
                    os: 'OLea___marta'
                },
                {
                    es6: 'Number',
                    os: 'O0lea'
                },
                {
                    es6: 'Object',
                    os: 'OBlea'
                },
                {
                    es6: 'prototype',
                    os: 'Ole_marta'
                },
                {
                    es6: 'String',
                    os: 'Ol_mart'
                },
                {
                    es6: 'toString',
                    os: 'Ol_mar'
                },
                {
                    es6: 'undefined',
                    os: 'o_marta'
                },
                {
                    es6: 'valueOf',
                    os: '_marta'
                },
            ],
            type: SyntaxType.RESERVED_OBJ_PROPS
        },
        {
            syntax: [{
                es6: 'alert',
                os: '__marta'
            },
            {
                es6: 'all',
                os: '___marta'
            },
            {
                es6: 'anchor',
                os: 'maarta'
            },
            {
                es6: 'anchors',
                os: 'maaarta'
            },
            {
                es6: 'area',
                os: 'maarrta'
            },
            {
                es6: 'assign',
                os: 'mArtA'
            },
            {
                es6: 'blur',
                os: 'm_a_r_t_a'
            },
            {
                es6: 'button',
                os: 'M4RT4'
            },
            {
                es6: 'checkbox',
                os: 'martOlea'
            },
            {
                es6: 'clearInterval',
                os: 'martOle'
            },
            {
                es6: 'clearTimeout',
                os: 'martOl'
            },
            {
                es6: 'clientInformation',
                os: 'martO'
            },
            {
                es6: 'close',
                os: 'Omart'
            },
            {
                es6: 'closed',
                os: 'Omar'
            },
            {
                es6: 'confirm',
                os: 'Oma'
            },
            {
                es6: 'constructor',
                os: 'Om'
            },
            {
                es6: 'crypto',
                os: 'marta-olea'
            },
            {
                es6: 'decodeURI',
                os: 'marta-o'
            },
            {
                es6: 'decodeURIComponent',
                os: 'marta-ol'
            },
            {
                es6: 'defaultStatus',
                os: 'marta-ole'
            },
            {
                es6: 'document',
                os: 'marta--olea'
            },
            {
                es6: 'element',
                os: 'm-a-r-t-a'
            },
            {
                es6: 'elements',
                os: 'm-a-r-t-a-s'
            },
            {
                es6: 'embed',
                os: 'm--a--r--t--a'
            },
            {
                es6: 'embeds',
                os: 'ma-rt-a'
            },
            {
                es6: 'encodeURI',
                os: 'o-l-e-a'
            },
            {
                es6: 'encodeURIComponent',
                os: 'o-e-a'
            },
            {
                es6: 'escape',
                os: 'o-l-a'
            },
            {
                es6: 'event',
                os: '@martaolea'
            },
            {
                es6: 'fileUpload',
                os: ':martaolea'
            },
            {
                es6: 'focus',
                os: 'mmarta'
            },
            {
                es6: 'form',
                os: 'mmmarta'
            },
            {
                es6: 'forms',
                os: 'mmmaarta'
            },
            {
                es6: 'frame',
                os: 'mmmaarrta'
            },
            {
                es6: 'innerHeight',
                os: 'mrt'
            },
            {
                es6: 'innerWidth',
                os: 'mrtl'
            },
            {
                es6: 'layer',
                os: 'aa'
            },
            {
                es6: 'layers',
                os: 'aao'
            },
            {
                es6: 'link',
                os: 'aaoe'
            },
            {
                es6: 'location',
                os: 'aaoea'
            },
            {
                es6: 'mimeTypes',
                os: 'MRT'
            },
            {
                es6: 'navigate',
                os: 'MRTL'
            },
            {
                es6: 'navigator',
                os: 'AA'
            },
            {
                es6: 'frames',
                os: 'AAO'
            },
            {
                es6: 'frameRate',
                os: 'AAOEA'
            },
            {
                es6: 'hidden',
                os: 'aaoeam'
            },
            {
                es6: 'history',
                os: 'aaoeamr'
            },
            {
                es6: 'image',
                os: 'aaoeamrt'
            },
            {
                es6: 'images',
                os: 'aaoeamrtl'
            },
            {
                es6: 'offscreenBuffering',
                os: 'mrtla'
            },
            {
                es6: 'open',
                os: 'mrtlaa'
            },
            {
                es6: 'opener',
                os: 'mrtlaao'
            },
            {
                es6: 'option',
                os: 'mrtlaaoe'
            },
            {
                es6: 'outerHeight',
                os: 'mrtlaaoea'
            },
            {
                es6: 'outerWidth',
                os: 'mrtlaaoeA'
            },
            {
                es6: 'packages',
                os: 'martA'
            },
            {
                es6: 'pageXOffset',
                os: 'marTA'
            },
            {
                es6: 'pageYOffset',
                os: 'maRTA'
            },
            {
                es6: 'parent',
                os: 'mARTA'
            },
            {
                es6: 'parseFloat',
                os: 'mARTAO'
            },
            {
                es6: 'parseInt',
                os: 'mARTAOL'
            },
            {
                es6: 'password',
                os: 'mARTAOLE'
            },
            {
                es6: 'pkcs11',
                os: 'mARTAOLEA'
            },
            {
                es6: 'plugin',
                os: 'maR'
            },
            {
                es6: 'prompt',
                os: 'maRT'
            },
            {
                es6: 'propertyIsEnum',
                os: 'maRTA'
            },
            {
                es6: 'radio',
                os: 'oLEA'
            },
            {
                es6: 'reset',
                os: 'olEA'
            },
            {
                es6: 'screenX',
                os: 'oleA'
            },
            {
                es6: 'screenY',
                os: 'oleAm'
            },
            {
                es6: 'scroll',
                os: 'oleAma'
            },
            {
                es6: 'secure',
                os: 'oleAmar'
            },
            {
                es6: 'select',
                os: 'oleAmart'
            },
            {
                es6: 'self',
                os: 'oleAmarta'
            },
            {
                es6: 'setInterval',
                os: 'moal'
            },
            {
                es6: 'setTimeout',
                os: 'moalre'
            },
            {
                es6: 'status',
                os: 'moalreta'
            },
            {
                es6: 'submit',
                os: 'moalretaa'
            },
            {
                es6: 'taint',
                os: 'marta_-_olea'
            },
            {
                es6: 'text',
                os: 'marta-_-olea'
            },
            {
                es6: 'textarea',
                os: 'm____o___'
            },
            {
                es6: 'top',
                os: 'ma___ol__'
            },
            {
                es6: 'unescape',
                os: 'mar__ole_'
            },
            {
                es6: 'untaint',
                os: 'mart_olea'
            },
            {
                es6: 'window',
                os: 'm_r_a'
            },
            ],
            type: SyntaxType.RESERVED_OTHER
        }
    ];

    private reduceCode(code: string): string[] {
        return code.split(/\s/);
    }

    private getTokenType(token: string): string {
        const tok = this.syntax.find(el => el.syntax.some(s => token.match(new RegExp(`^${s.os}$`))))
        if (tok) return tok.type;
        else return undefined
    }
    private getRegexp(token: string): RegExp | undefined {
        let tok
        for (let types of this.syntax) {
            const os = types.syntax.find(s => token.trim().match(s.os))
            if (os) tok = os
        }
        if (tok) return new RegExp(`(^\\${tok.os.split('').join('\\')}$)`)
        else return undefined

    }


    public tokenizeCode(code: string) {
        let highlighted;
        highlighted = code.replace(/([\s.(),+-?<>:;\[\]{}!%*\/])/g, '<span>$1</span>')
        highlighted = highlighted.replace(/"(.*?)"/g, "<span>\"$1\"</span>")
        const lines: string[] = highlighted.split('\n');
        const codeEl = document.createElement('code');
        Array.from(lines).forEach((line) => {
            const row = document.createElement('div');
            row.className = 'row'
            row.innerHTML = line;
            codeEl.append(row);
        });
        const rows = codeEl.querySelectorAll('.row');
        Array.from(rows).forEach(row => {
            const childs = row.childNodes;
            Array.from(childs).forEach(child => {
                if (child.nodeName === '#text') {
                    const span = document.createElement('span');
                    span.innerHTML = child.nodeValue;
                    row.insertBefore(span, child);
                    child.remove();
                } else {
                    (child as HTMLElement).innerHTML = (child as HTMLElement).innerText;
                    if ((child as HTMLElement).innerHTML.trim() === '') {
                        (child as HTMLElement).innerHTML = '&nbsp;'
                    }
                }
            });
            if ((row as HTMLElement).innerText === '') row.remove();
        });
        Array.from(rows).forEach(row => {
            let spans = row.querySelectorAll('span')
            console.log(spans);
            while (spans.length > 2 && Array.from(spans).slice(-2)[0].innerText === ' ' && Array.from(spans).slice(-2)[1].innerText === ' ')
                row.removeChild(row.lastChild)
            console.log(row);
        });

        return codeEl;
    }

    public tokenizeTokens(tokens: HTMLElement) {
        const rows = tokens.querySelectorAll('.row');
        const codeEl = document.createElement('code');
        Array.from(rows).forEach((row, i) => {
            const spans = row.querySelectorAll('span');
            row.id = `row-${i}`;
            Array.from(spans).forEach((span, j) => {
                span.id = `row-${i}-token-${j}`;
                const tokenType = this.getTokenType(span.innerText);
                if (tokenType) span.className = tokenType;
            });
            codeEl.append(row);
        });
        return codeEl;
    }

    public highlightCodeReplaceBy(code: string, replaceBy: { regExp: RegExp, token: string }, first?: boolean): string {
        return code.split(replaceBy.regExp).map(el => {
            if (first) return `<span class="syntax">${el}<\/span>`
            return el.replace(el, `<span>${el}<\/span>`)
        }).join(replaceBy.token)
    }

}

