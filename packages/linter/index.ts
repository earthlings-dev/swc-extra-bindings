import * as binding from "./binding";

export type LintOptions = {
    filename?: string;
};

export async function lint(
    content: Buffer,
    options: LintOptions = {}
): Promise<binding.TransformOutput> {
    return binding.lint(content, toBuffer(options));
}

export function lintSync(
    content: Buffer,
    options: LintOptions = {}
): binding.TransformOutput {
    return binding.lintSync(content, toBuffer(options));
}

function toBuffer(value: unknown): Buffer {
    return Buffer.from(JSON.stringify(value));
}
